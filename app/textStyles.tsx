import { defineTextStyles } from "@pandacss/dev";

const indivisibleSize = 9;
const baseSize = indivisibleSize * 2;

const commonTextStyles = {
  color: "token(colors.textColor)",
  fontFamily: "Shantell Sans Variable, sans-serif",
  fontWeight: "500",
};

const commonHeaderStyles = {
  fontWeight: "700",
};

const generateFontConfig = (size: number, { marginTopSplit = 0 } = {}) => {
  const _ = (size: number) => {
    const precision = 1000;

    // Compile time assertion to make sure that size is a multiple of the base size
    // Otherwise it could easily break vertical rhythm
    if (Math.floor((size % indivisibleSize) * precision) / precision !== 0) {
      throw new Error(
        `Size must be a multiple of the base size.Number specified: ${size}`,
      );
    }

    return size;
  };

  const fontSize = _(size * baseSize);
  const lineHeight = _(fontSize + baseSize);
  const totalMargin = _(fontSize) * 2;
  const marginBottomSplit = 1 - marginTopSplit;
  const marginBottom = _(totalMargin * marginBottomSplit);
  const marginTop = _(totalMargin * marginTopSplit);

  const config = {
    fontSize: `${fontSize}px`,
    lineHeight: `${lineHeight}px`,
    marginTop: `${marginTop}px`,
    marginBottom: `${marginBottom}px`,
  };

  return config;
};

export const textStyles = defineTextStyles({
  body: {
    description: "Used in paragraphs",
    value: {
      ...commonTextStyles,
      ...generateFontConfig(1),
      textJustify: "inter-word",
    },
  },
  heading1: {
    description: "Used in <h1 /> tags",
    value: {
      ...commonTextStyles,
      ...commonHeaderStyles,
      ...generateFontConfig(4, { marginTopSplit: 3 / 4 }),
    },
  },
  heading2: {
    description: "Used in <h2 /> tags",
    value: {
      ...commonTextStyles,
      ...commonHeaderStyles,
      ...generateFontConfig(3, { marginTopSplit: 3 / 4 }),
    },
  },
  heading3: {
    description: "Used in <h3 /> tags",
    value: {
      ...commonTextStyles,
      ...commonHeaderStyles,
      ...generateFontConfig(2, { marginTopSplit: 3 / 4 }),
    },
  },
});
