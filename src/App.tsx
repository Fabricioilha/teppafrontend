
import { AuthGoogleProvider } from "./context/authGoogle";
import { FormProvider } from "./context/formContext";
import AppRoutes from "./routes/Routes";


function App() {
  return (
    <AuthGoogleProvider>
      <FormProvider>
        <AppRoutes /> 
      </FormProvider> 
    </AuthGoogleProvider> )
}
export default App;
