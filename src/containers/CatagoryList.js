import { Box, Link } from "@mui/material";

export default function CatagoryList() {
    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                typography: "body1",
                "& > :not(style) + :not(style)": {
                    ml: 2,
                },
                marginTop: "10px",
            }}
        >
            <Link href="#" underline="hover">
                {"Catagory One"}
            </Link>
            <Link href="#" underline="hover">
                {"Catagory Two"}
            </Link>
            <Link href="#" underline="hover">
                {"Catagory Tree"}
            </Link>
        </Box>
    );
}
