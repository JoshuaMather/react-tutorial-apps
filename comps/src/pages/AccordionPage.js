import Accordion from "../components/Accordion";

function AccordionPage() {
    const items = [
        {
            'id': 'afe',
            label: 'Label 1',
            content: 'This is the content to be shown when the accordion is open!'
        },
        {
            'id': 'srb',
            label: 'Label 2',
            content: 'This is the content to be shown when the accordion is open!'
        },
        {
            'id': 'rsd',
            label: 'Label 3',
            content: 'This is the content to be shown when the accordion is open!'
        },
    ];

   return (
    <Accordion items={items} />
   )
}

export default AccordionPage;