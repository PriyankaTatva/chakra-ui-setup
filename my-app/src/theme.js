import { extendTheme } from "@chakra-ui/react";
const colors = {
  brand: { 
    50: "#f5f7ff",
    100: "#e6eeff",
    200: "#c9d6ff",
    300: "#a3b5ff",
    400: "#7590ff",
    500: "#4b6eff", // Main brand color
    600: "#3858db",
    700: "#2a69ac",
    800: "#153e75",
    900: "#1a365d",
  },
  primary: {
    main: "#7bb9e8",
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3", // it will take 500 as a main color from primary palette
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
  },
};
const fonts = {
  heading: `'circular-std-medium', sans-serif`,
  body: `'Poppins', sans-serif`,
};

const breakPoints = {
  base: '0',
  sm: "480px",
  md: "768px",
  lg: "992px",
  xl: "1280px",
  '2xl': "1536px",
}

const theme = extendTheme({
  colors,
  fonts,
  breakPoints,
  styles: {
    global: {
      body: {
        // bg: 'brand.700',
        fontSize: "16px",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
        borderRadius: "md",
      },
      sizes: {
        xl: {
          h: "56px",
          fontSize: "lg",
          px: "32px",
        },
      },
      variants: {
        "with-shadow": {
          bg: "red.400",
          boxShadow: "0 0 2px 2px #efdfde",
          transition: "all 0.5s",
          _hover: {
            bg: "#000",
            color: "#fff",
          },
        },
        solid: {          
          color: "white",
          _hover: {
            bg: "brand.600",
          },
        },
        outline: {
          borderColor: "brand.500",
          color: "brand.500",
          _hover: {
            bg: "brand.100",
          },
        },      
      },
    },
  },
});
export default theme;