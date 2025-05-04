"use client";

import { Box, IconButton } from "@mui/material";
import { useMemo, useState } from "react";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

interface JsonFormatProps {
  value: string;
}

interface JsonValue {
  label?: string;
  url?: string;
  [key: string]: unknown;
}

// Colors for different JSON elements
const jsonColors = {
  key: {
    depth0: "#9CDCFE", // Light blue for depth 0
    depth1: "#AF75FF", // Purple for depth 1
    depth2: "#CE9178", // Red for depth 2
    depth3: "#F54E4E", // Yellow for depth 3
    depth4: "#4EC9B0", // Teal for depth 4+
  },
  string: "#b9db51", // Orange-brown for string values
  number: "#B5CEA8", // Green for numbers
  boolean: "#569CD6", // Blue for booleans
  null: "#569CD6", // Blue for null
  bracket: "#569CD6", // Blue for square brackets
  brace: "#FFFF00", // Yellow for curly braces
  colon: "#FFFFFF", // White for colons
} as const;

const isValidJson = (text: string): boolean => {
  try {
    JSON.parse(text);
    return true;
  } catch {
    return false;
  }
};

const getKeyColor = (depth: number): string => {
  switch (depth) {
    case 0:
      return jsonColors.key.depth0;
    case 1:
      return jsonColors.key.depth1;
    case 2:
      return jsonColors.key.depth2;
    case 3:
      return jsonColors.key.depth3;
    default:
      return jsonColors.key.depth4;
  }
};

const formatJsonValue = (
  value: unknown,
  depth: number = 0
): React.ReactElement => {
  if (value === null) {
    return <span style={{ color: jsonColors.null }}>null</span>;
  }

  switch (typeof value) {
    case "string":
      return (
        <span style={{ color: jsonColors.string }}>&quot;{value}&quot;</span>
      );
    case "number":
      return <span style={{ color: jsonColors.number }}>{value}</span>;
    case "boolean":
      return <span style={{ color: jsonColors.boolean }}>{String(value)}</span>;
    case "object":
      // Special handling for objects with label and url
      if (
        !Array.isArray(value) &&
        (value as JsonValue).label &&
        (value as JsonValue).url
      ) {
        return (
          <a
            href={(value as JsonValue).url}
            target="_self"
            rel="noopener noreferrer"
            style={{ color: jsonColors.string, textDecoration: "underline" }}
          >
            {(value as JsonValue).label}
          </a>
        );
      }
      return <JsonContent value={value} depth={depth} />;
    default:
      return <span>{String(value)}</span>;
  }
};

const JsonContent = ({
  value,
  depth = 0,
}: {
  value: unknown;
  depth?: number;
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const isArray = Array.isArray(value);
  // const bracketColor = { color: jsonColors.bracket };
  const indent = "  ".repeat(depth);
  const nestedIndent = "  ".repeat(depth + 1);

  const toggleCollapse = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsCollapsed(!isCollapsed);
  };

  if (isArray) {
    return (
      <Box component="span" sx={{ display: "inline" }}>
        <span style={{ color: jsonColors.bracket }}>[</span>
        <IconButton
          size="small"
          onClick={toggleCollapse}
          sx={{
            padding: 0,
            marginRight: 0.5,
            color: jsonColors.bracket,
            "&:hover": { backgroundColor: "transparent" },
          }}
        >
          {!isCollapsed ? (
            <ExpandMoreIcon fontSize="small" />
          ) : (
            <KeyboardArrowRightIcon fontSize="small" />
          )}
        </IconButton>
        {isCollapsed ? (
          <span style={{ color: jsonColors.bracket }}>...]</span>
        ) : (
          <>
            <br />
            {value.map((item: unknown, index: number) => (
              <React.Fragment key={index}>
                <span>{nestedIndent}</span>
                {formatJsonValue(item, depth + 1)}
                {index < value.length - 1 && (
                  <>
                    <span style={{ color: jsonColors.bracket }}>,</span>
                    <br />
                  </>
                )}
              </React.Fragment>
            ))}
            <br />
            <span>{indent}</span>
            <span style={{ color: jsonColors.bracket }}>]</span>
          </>
        )}
      </Box>
    );
  }

  return (
    <Box component="span" sx={{ display: "inline" }}>
      <span style={{ color: jsonColors.brace }}>{"{"}</span>
      <IconButton
        size="small"
        onClick={toggleCollapse}
        sx={{
          padding: 0,
          marginRight: 0.5,
          color: jsonColors.brace,
          "&:hover": { backgroundColor: "transparent" },
        }}
      >
        {!isCollapsed ? (
          <ExpandMoreIcon fontSize="small" />
        ) : (
          <KeyboardArrowRightIcon fontSize="small" />
        )}
      </IconButton>
      {isCollapsed ? (
        <span style={{ color: jsonColors.brace }}>{"..."}</span>
      ) : (
        <>
          <br />
          {Object.entries(value as Record<string, unknown>).map(
            ([key, val], index, arr) => (
              <React.Fragment key={key}>
                <span>{nestedIndent}</span>
                <span style={{ color: getKeyColor(depth) }}>
                  &quot;{key}&quot;
                </span>
                <span style={{ color: jsonColors.colon }}>: </span>
                {formatJsonValue(val, depth + 1)}
                {index < arr.length - 1 && (
                  <>
                    <span style={{ color: jsonColors.brace }}>,</span>
                    <br />
                  </>
                )}
              </React.Fragment>
            )
          )}
          <br />
          <span>{indent}</span>
          <span style={{ color: jsonColors.brace }}>{"}"}</span>
        </>
      )}
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
        // fontFamily: "monospace",
        whiteSpace: "pre-wrap",
        color: "#D4D4D4",
        borderRadius: 1,
        fontWeight: 100,
        "& *": {
          fontWeight: 100,
        },
      }}
    >
      {formattedContent}
    </Box>
  );
}
