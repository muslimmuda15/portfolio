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
  bracket: "#D4D4D4", // Light gray for brackets and braces
} as const;

const isValidJson = (text: string): boolean => {
  try {
    JSON.parse(text);
    return true;
  } catch {
    return false;
  }
};

const formatJsonValue = (value: any): React.ReactElement => {
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
      return <JsonContent value={value} />;
    default:
      return <span>{String(value)}</span>;
  }
};

const JsonContent = ({ value }: { value: any }) => {
  const isArray = Array.isArray(value);
  const bracketColor = { color: jsonColors.bracket };

  if (isArray) {
    return (
      <Box component="span" sx={{ display: "block", ml: 2 }}>
        <span style={bracketColor}>[</span>
        {value.map((item, index) => (
          <Box key={index} component="span" sx={{ display: "block", ml: 2 }}>
            {formatJsonValue(item)}
            {index < value.length - 1 && <span style={bracketColor}>,</span>}
          </Box>
        ))}
        <span style={bracketColor}>]</span>
      </Box>
    );
  }

  return (
    <Box component="span" sx={{ display: "block", ml: 2 }}>
      <span style={bracketColor}>{"{"}</span>
      {Object.entries(value).map(([key, val], index, arr) => (
        <Box key={key} component="span" sx={{ display: "block", ml: 2 }}>
          <span style={{ color: jsonColors.key }}>"{key}"</span>
          <span style={bracketColor}>: </span>
          {formatJsonValue(val)}
          {index < arr.length - 1 && <span style={bracketColor}>,</span>}
        </Box>
      ))}
      <span style={bracketColor}>{"}"}</span>
    </Box>
  );
};

export default function JsonFormat({ value: text }: JsonFormatProps) {
  const formattedContent = useMemo(() => {
    if (!isValidJson(text)) {
      return text;
    }

    const parsedJson = JSON.parse(text);
    return formatJsonValue(parsedJson);
  }, [text]);

  return (
    <Box sx={{ 
      fontFamily: "monospace", 
      whiteSpace: "pre-wrap",
      backgroundColor: "#1E1E1E", // Dark background
      color: "#D4D4D4", // Light text
      p: 2,
      borderRadius: 1,
    }}>
      {formattedContent}
    </Box>
  );
}
