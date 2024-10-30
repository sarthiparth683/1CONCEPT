import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactHeader from "./components/ContactHeader/ContactHeader";
import Navigation from "./components/Navigation/Navigation";
import Form1 from "./components/Form/Form1";
import FormConcept from "./components/Form/FormConcept";

function App() {
  return (
    <div>
      <Navigation />
      <main className="main_container">
        <ContactHeader />
        <ContactForm />
      </main>
      <Form1 />
      {/* <FormConcept /> */}
    </div>
  );
}

export default App;
