import * as React from "react";
import MDEditor, { commands } from "@uiw/react-md-editor"; // https://uiwjs.github.io/react-md-editor/
import katex from "katex";
import "katex/dist/katex.css";

import { getCodeString } from "rehype-rewrite";
import { Box, Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default function SelfDisciplinePlannerMemo() {
  const [value, setValue] = React.useState("");
  const handleChange = (e: string | undefined) => {
    setValue(e || "");
  };

  const help = {
    name: "help",
    keyCommand: "help",
    buttonProps: { "aria-label": "Insert help" },
    icon: (
      <svg viewBox="0 0 16 16" width="12px" height="12px">
        <path
          d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm.9 13H7v-1.8h1.9V13Zm-.1-3.6v.5H7.1v-.6c.2-2.1 2-1.9 1.9-3.2.1-.7-.3-1.1-1-1.1-.8 0-1.2.7-1.2 1.6H5c0-1.7 1.2-3 2.9-3 2.3 0 3 1.4 3 2.3.1 2.3-1.9 2-2.1 3.5Z"
          fill="currentColor"
        />
      </svg>
    ),
    execute: () => {
      window.open("https://www.markdownguide.org/basic-syntax/", "_blank");
    },
  };

  return (
    <Box component="div">
      <Box component="div" sx={{ mb: 2 }}>
        <MDEditor
          value={value}
          preview="preview" // live, edit, preview
          onChange={handleChange}
          commands={[...commands.getCommands(), help]}
          previewOptions={{
            components: {
              code: ({ inline, children = [], className, ...props }) => {
                const txt = children[0] || "";
                if (inline) {
                  if (typeof txt === "string" && /^\$\$(.*)\$\$/.test(txt)) {
                    const html = katex.renderToString(
                      txt.replace(/^\$\$(.*)\$\$/, "$1"),
                      {
                        throwOnError: false,
                      }
                    );
                    return <code dangerouslySetInnerHTML={{ __html: html }} />;
                  }
                  return <code>{txt}</code>;
                }
                const code =
                  props.node && props.node.children
                    ? getCodeString(props.node.children)
                    : txt;
                if (
                  typeof code === "string" &&
                  typeof className === "string" &&
                  /^language-katex/.test(className.toLocaleLowerCase())
                ) {
                  const html = katex.renderToString(code, {
                    throwOnError: false,
                  });
                  return (
                    <code
                      style={{ fontSize: "150%" }}
                      dangerouslySetInnerHTML={{ __html: html }}
                    />
                  );
                }
                return <code className={String(className)}>{txt}</code>;
              },
            },
          }}
        />
      </Box>
      <Button
        variant="outlined"
        sx={{ mb: 4 }}
        fullWidth
        startIcon={<AddCircleOutlineIcon />}
      >
        메모 등록
      </Button>
    </Box>
  );
}
