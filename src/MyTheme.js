import purple from "@material-ui/core/colors/purple";
import {createMuiTheme} from "@material-ui/core/styles/index";
import green from "@material-ui/core/colors/green";
import orange from "@material-ui/core/colors/orange";
import blue from "@material-ui/core/colors/lightBlue";

export const MyTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#92ff58',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    controlButton: {backgroundColor: '#87cbff', color: '#212121'},
    allButtons: {backgroundColor: '#3b5998', color: '#ffffff'},
    accent: { backgroundColor: orange[500], color: '#000' },
    action: { backgroundColor: '#92ff58', color: '#000'},
    button: { backgroundColor: blue[500], color: '#FFF', marginTop: 20, marginLeft: 60},
  },
});

