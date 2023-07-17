import * as React from 'react';
import LinearProgress, {
  LinearProgressProps,
} from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary"></Typography>
      </Box>
    </Box>
  );
}

export default function LinearWithValueLabel() {
  const [progress, setProgress] = React.useState(34);

  const handleNextStep = () => {
    if (progress == 100) {
      return;
    }

    setProgress((nextProgress) =>
      nextProgress >= 100 ? 10 : nextProgress + 33
    );
  };

  const handlePrevStep = () => {
    if (progress <= 34) return;

    setProgress((nextProgress) =>
      nextProgress >= 100 ? 67 : nextProgress - 33
    );
  };


  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgressWithLabel value={progress} />
      <Button variant="text" onClick={handleNextStep}>
        Next
      </Button>
      <Button variant="text" onClick={handlePrevStep}>
        Prev
      </Button>
    </Box>
  );
}
