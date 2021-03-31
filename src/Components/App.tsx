// React/Node
import React, { useRef, useEffect, FunctionComponent } from "react";
import { Switch, Route } from "react-router-dom";
import Cookies from "js-cookie";

// ARCGIS
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import ArcGISMap from "@arcgis/core/Map";
import DictionaryRenderer from "@arcgis/core/renderers/DictionaryRenderer";
import MapView from "@arcgis/core/views/MapView";
import Portal from "@arcgis/core/portal/Portal"
import PortalQueryParams from "@arcgis/core/portal/PortalQueryParams"

// ARCGIS OAUTH2
import OAuthInfo from "@arcgis/core/identity/OAuthInfo"
import esriId from "@arcgis/core/identity/IdentityManager"



// CSS
import "./App.css";

// Components
import WebMapView from './WebMapViewComponent/WebMapViewCoponent'
import PrivateRoute from './Protected/PrivateRouteComponent'
import Navigation from './NavigationComponent/NavigationComponent'

// Recoil State
import { useRecoilState } from 'recoil';
import { tokenState } from '../Recoil/Store/Atoms/Atoms';

// Constants
import { ROUTES, OAUTH_SETTINGS, WEBMAPS, THEMES, APP } from '../Constants/Constants'
import { RecentActors } from "@material-ui/icons";

// Interfaces
interface Props {

}

// Functions
// const SignIn = async (isChached: boolean) => {
//   // Check if credentials are in cookies
//   if (!isChached) {
//     // Register App
//     var info = new OAuthInfo(OAUTH_SETTINGS.CONFIG);
//     esriId.registerOAuthInfos([info]);

//     // Log User
//     await esriId.getCredential(info.portalUrl + "/sharing");

//     // Check Login Status
//     esriId.checkSignInStatus(info.portalUrl + "/sharing").then((credentials) => {

//       // Register Access Token
//       esriId.registerToken({
//         server: credentials.server,
//         token: credentials.token
//       });

//       // Set Cookies
//       Cookies.set('user', credentials.userId);
//       Cookies.set('token', credentials.token);
//       Cookies.set('expires_in', credentials.expires);
//       Cookies.set('server', credentials.server);

//     });
//   } else {
//     // Check token validaity
//     const expire = Cookies.get('expires_in');

//     if (expire < new Date().getTime() / 1000) {
//       // Register App
//       var info = new OAuthInfo(OAUTH_SETTINGS.CONFIG);
//       esriId.registerOAuthInfos([info]);

//       // Log User
//       await esriId.getCredential(info.portalUrl + "/sharing");

//       // Check Login Status
//       esriId.checkSignInStatus(info.portalUrl + "/sharing").then((credentials) => {

//         // Register Access Token
//         esriId.registerToken({
//           server: credentials.server,
//           token: credentials.token
//         });

//         // Set Cookies
//         Cookies.set('user', credentials.userId);
//         Cookies.set('token', credentials.token);
//         Cookies.set('expires_in', credentials.expires);
//         Cookies.set('server', credentials.server);

//       });
//     }
//   }
// }

// const ConstructURI = (): string => {
//   const clientId = process.env.REACT_APP_ARCGIS_CLIENT_ID;
//   let redirectUri = process.env.REACT_APP_ARCGIS_REDIRECT;
//   return `https://www.arcgis.com/sharing/rest/oauth2/authorize?client_id=${clientId}&response_type=token&expiration=20160&redirect_uri=${redirectUri}`
// }

// const ExtractToken = (): RegExpMatchArray => {
//   let match = (window.location.hash) ? window.location.hash.match(/#access_token=([^&]+)/) : [];

//   if (match === null) {
//     match = [];
//   } else if (match.length <= 0) {
//     return [];
//   }

//   return match;
// }

const App: FunctionComponent<Props> = ({ }) => {

  //const isCashed = Cookies.get('token') ? true : false;

  useEffect(() => {

  }, []);

  return (
    <React.Fragment>
      <Navigation mode={THEMES.DARK} title={APP.INFO.NAME}/>
      <Switch>
        <Route exact path={ROUTES.MAP} component={(props) => (<WebMapView
          id={WEBMAPS.CARSON_TEST_MAP}
          map_type={'2D'}
          container_dimensions={{
            width: '100',
            height: '100'
          }} {...props} />)} />
      </Switch>

    </React.Fragment>


  );
}

export default App;
