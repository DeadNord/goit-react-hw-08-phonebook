// importComponent
import Section from './components/phonebook/section/Section';
import Form from './components/phonebook/form/Form';
import Contacts from './components/phonebook/contacts/Contacts';
import Filter from './components/phonebook/filter/Filter';

function App() {
  return (
    <>
      <Section title={'Phonebook'}>
        <Form />
      </Section>
      <Section title={'Contacts'}>
        <Filter />
        <Contacts />
      </Section>
    </>
  );
}

export default App;
