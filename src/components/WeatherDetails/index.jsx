import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { DialogContent } from '@mui/material';


function WeatherDetails(props) {
  const { onClose, weather, open } = props;

  const handleClose = () => {
    onClose(weather);
  };
 const iconUrl = `http://openweathermap.org/img/w/${weather?.icon}.png`;

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle></DialogTitle>
      <DialogContent>
        <div>
          <h2>{weather?.city}</h2>
          <h2>{weather?.temp} °C</h2>
          <h2>{weather?.weather} <img src={iconUrl} alt=""/></h2>
          <h2>High: {weather?.high} °C</h2>
          <h2>Low: {weather?.low} °C</h2>
        </div>
     </DialogContent>
    </Dialog>
  );
}


export default WeatherDetails;
