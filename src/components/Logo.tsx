import { Box, Typography } from "@mui/material"

function Logo() {
  return (
    <div className="border divide-solid h-10 w-10 flex justify-center content-center rounded-full">
        <Box sx={{ alignContent: 'center' }}>
          <Typography sx={{ color: 'text.primary' }} fontWeight='bold'>
            JD
          </Typography>
        </Box>
    </div>
  )
}

export default Logo