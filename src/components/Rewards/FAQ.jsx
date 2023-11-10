/* eslint-disable indent */
import FAQs from '../../data/FAQ.json'
import { Accordion, AccordionItem } from '@nextui-org/react'

export default function App() {
  const defaultContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

  return (
    <Accordion>
      {FAQs.map((faq) => (
        <AccordionItem
          className='font-GilroyRegular'
          classNames={{ title: 'font-GilroySemibold' }}
          key={faq.key}
          aria-label={faq.label}
          title={faq.title}
        >
          {faq.content || defaultContent}
        </AccordionItem>
      ))}
    </Accordion>
  )
}
