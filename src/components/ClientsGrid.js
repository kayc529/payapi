const ClientsGrid = ({ darkMode = false }) => {
  return (
    <div className='grid grid-rows-3 grid-cols-2 gap-10 items-center justify-items-center md:grid-rows-2 md:grid-cols-3'>
      <img
        src={`assets/shared/desktop/tesla${darkMode ? '-dark' : ''}.svg`}
        alt='tesla'
      />
      <img
        src={`assets/shared/desktop/microsoft${darkMode ? '-dark' : ''}.svg`}
        alt='microsoft'
      />
      <img
        src={`assets/shared/desktop/hewlett-packard${
          darkMode ? '-dark' : ''
        }.svg`}
        alt='hewlett-packard'
      />
      <img
        src={`assets/shared/desktop/oracle${darkMode ? '-dark' : ''}.svg`}
        alt='oracle'
      />
      <img
        src={`assets/shared/desktop/google${darkMode ? '-dark' : ''}.svg`}
        alt='google'
      />
      <img
        src={`assets/shared/desktop/nvidia${darkMode ? '-dark' : ''}.svg`}
        alt='nvidia'
      />
    </div>
  );
};

export default ClientsGrid;
