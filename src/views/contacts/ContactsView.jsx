import Section from '../../components/phonebook/section/Section';
import Form from '../../components/phonebook/form/Form';
import Filter from '../../components/phonebook/filter/Filter';
import Contacts from '../../components/phonebook/contacts/Contacts';

export default function ContactsView() {
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
