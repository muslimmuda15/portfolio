import { Box, Typography } from "@mui/material";
import { useMemo } from "react";
import React from "react";

interface JsonFormatProps {
  value: string;
}

// Colors for different JSON elements
const jsonColors = {
  key: "#9CDCFE", // Light blue for keys
  string: "#CE9178", // Orange-brown for string values
  number: "#B5CEA8", // Green for numbers
  boolean: "#569CD6", // Blue for booleans
  null: "#569CD6", // Blue for null
  bracket: "#FFFF00", // Light gray for brackets and braces
} as const;

const isValidJson = (text: string): boolean => {
  try {
    JSON.parse(text);
    return true;
  } catch {
    return false;
  }
};

const formatJsonValue = (value: any, depth: number = 0): React.ReactElement => {
  if (value === null) {
    return <span style={{ color: jsonColors.null }}>null</span>;
  }

  switch (typeof value) {
    case "string":
      return <span style={{ color: jsonColors.string }}>"{value}"</span>;
    case "number":
      return <span style={{ color: jsonColors.number }}>{value}</span>;
    case "boolean":
      return <span style={{ color: jsonColors.boolean }}>{String(value)}</span>;
    case "object":
      // Special handling for objects with label and url
      if (!Array.isArray(value) && value.label && value.url) {
        return (
          <a
            href={value.url}
            target="_self"
            rel="noopener noreferrer"
            style={{ color: jsonColors.string, textDecoration: "underline" }}
          >
            {value.label}
          </a>
        );
      }
      return <JsonContent value={value} depth={depth} />;
    default:
      return <span>{String(value)}</span>;
  }
};

const JsonContent = ({ value, depth = 0 }: { value: any; depth?: number }) => {
  const isArray = Array.isArray(value);
  const bracketColor = { color: jsonColors.bracket };
  const entries = isArray ? value : Object.entries(value);
  const indent = "  ".repeat(depth);
  const nestedIndent = "  ".repeat(depth + 1);

  if (isArray) {
    const isStringArray = value.every((item: any) => typeof item === "string");

    return (
      <Box component="span" sx={{ display: "inline" }}>
        <span style={bracketColor}>[</span>
        <br />
        {value.map((item: any, index: number) => (
          <React.Fragment key={index}>
            <span>{nestedIndent}</span>
            {formatJsonValue(item, depth + 1)}
            {index < value.length - 1 && (
              <>
                <span style={bracketColor}>,</span>
                <br />
              </>
            )}
          </React.Fragment>
        ))}
        <br />
        <span>{indent}</span>
        <span style={bracketColor}>]</span>
      </Box>
    );
  }

  return (
    <Box component="span" sx={{ display: "inline" }}>
      <span style={bracketColor}>{"{"}</span>
      <br />
      {Object.entries(value).map(([key, val], index, arr) => (
        <React.Fragment key={key}>
          <span>{nestedIndent}</span>
          <span style={{ color: jsonColors.key }}>"{key}"</span>
          <span style={bracketColor}>: </span>
          {formatJsonValue(val, depth + 1)}
          {index < arr.length - 1 && (
            <>
              <span style={bracketColor}>,</span>
              <br />
            </>
          )}
        </React.Fragment>
      ))}
      <br />
      <span>{indent}</span>
      <span style={bracketColor}>{"}"}</span>
    </Box>
  );
};

export default function JsonBlockFormat({ value: text }: JsonFormatProps) {
  const formattedContent = useMemo(() => {
    if (!isValidJson(text)) {
      return text;
    }

    const parsedJson = JSON.parse(text);
    return formatJsonValue(parsedJson, 0);
  }, [text]);

  return (
    <Box
      sx={{
        fontFamily: "monospace",
        whiteSpace: "pre-wrap",
        color: "#D4D4D4",
        borderRadius: 1,
      }}
    >
      {formattedContent}
    </Box>
  );
}
