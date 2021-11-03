import React, { useState } from 'react';

function ContactSection() {
  const [formValue, setFormValue] = useState({
    email: '',
    name: '',
    message: '',
  });

  const faqAccordion = [
    {
      title: 'Come posso effettuare un ordine?',
      content:
        'Se è il tuo primo ordine, contattaci tramite il form integrato oppure inviando una email a <span class="text-red-500 tracking-wide">ordini@bakkano.it</span>. Ti ricontatteremo via email o telefonicamente con tutti i dettagli necessari per creare il tuo account.',
    },
    {
      title: "C'è una quantità minima?",
      content: 'No.',
    },
    {
      title:
        'Sono un privato, posso ordinare i vostri prodotti tramite questa pagina web?',
      content:
        "Attualmente, il servizio é riservato ai possessori di un'attività con Partita IVA nel settore Ho.Re.Ca.",
    },
    {
      title: 'Come posso avere più informazioni?',
      content:
        "Basta contattarci all'indirizzo email <span class='text-red-500 tracking-wide'>ordini@bakkano.it</span> oppure utilizzando il form integrato. Ti ricontatteremo al più presto!",
    },
  ];

  const [expanded, setExpanded] = useState(
    new Array(faqAccordion.lenght).fill(0)
  );
  const setQuestionExpanded = (i) => {
    let tempExpanded = [...expanded];
    tempExpanded[i] = !expanded[i];
    setExpanded(tempExpanded);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
  };

  const Form = () => {
    return (
      <form
        onSubmit={(e) => handleFormSubmit(e)}
        className='flex flex-col gap-4 w-full lg:w-1/2'>
        <div className='w-full flex flex-col lg:flex-row gap-4'>
          <label htmlFor='contact-email' className='w-full'>
            <span className='block text-white mb-2'>Email</span>
            <input
              value={formValue.email}
              onChange={(e) =>
                setFormValue({ ...formValue, email: e.target.value })
              }
              type='email'
              id='contact-email'
              className='w-full p-2'
              required
            />
          </label>
          <label htmlFor='contact-name' className='w-full'>
            <div className='flex items-center mb-2'>
              <span className='text-white'>Azienda</span>
              <span className='text-red-500 text-xs ml-2'>opzionale</span>
            </div>
            <input
              value={formValue.name}
              onChange={(e) =>
                setFormValue({ ...formValue, name: e.target.value })
              }
              type='text'
              id='contact-name'
              className='w-full p-2'
            />
          </label>
        </div>

        <label htmlFor='contact-message'>
          <div className='flex items-center mb-2'>
            <span className='text-white'>Messaggio</span>
            <span className='text-red-500 text-xs ml-2'>opzionale</span>
          </div>
          <textarea
            onChange={(e) =>
              setFormValue({ ...formValue, message: e.target.value })
            }
            value={formValue.message}
            className='w-full p-2'
            id='contact-message'
          />
        </label>

        <button
          type='submit'
          className='text-span px-4 py-2 bg-red-600 hover:bg-red-700 cursor-pointer tracking-wide transition-colors duration-200 transform text-white focus:outline-none focus:bg-red-500 lg:mr-auto'>
          Invia
        </button>
      </form>
    );
  };
  return (
    <section
      id='contattaci'
      className='flex flex-col bg-brand-dark-1 z-10 py-16'>
      <div className='container w-full flex flex-col text-center md:text-left md:flex-row items-center mb-16'>
        <h1 className='main-title text-3xl lg:text-7xl uppercase text-white font-bold tracking-wide w-fit-content lg:pr-8'>
          Contattaci
        </h1>
        <span className='block border-b-4 border-red-500 h-4 w-1/3 lg:w-full'></span>
      </div>

      <div className='container flex flex-col items-center lg:flex-row gap-12'>
        {Form()}
        <div className='flex flex-col lg:w-1/2'>
          {faqAccordion.map((faq, i) => {
            return (
              <div
                key={`faq-accordion_${i}`}
                className='border-b border-gray-300 hover:border-red-400 transition-all cursor-pointer'>
                <div
                  className='flex items-center w-full justify-between py-2'
                  onClick={() => setQuestionExpanded(i)}>
                  <h1 className='text-xl font-semibold text-white min-w-150'>
                    {faq.title}
                  </h1>
                  <span className='text-red-600'>
                    {' '}
                    {expanded[i] ? '-' : '+'}
                  </span>
                </div>
                <div
                  className={`flex flex-col text-white overflow-hidden ${
                    expanded[i] ? 'h-auto pt-2 pb-4' : 'h-0'
                  }`}>
                  <span
                    className='block cursor-default'
                    dangerouslySetInnerHTML={{ __html: faq.content }}></span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
