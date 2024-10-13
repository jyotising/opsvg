
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M6 6.1401C6 6.0627 6.0627 6 6.1401 6H17.8599C17.9373 6 18 6.0627 18 6.1401V12C18 15.3137 15.3137 18 12 18C8.6863 18 6 15.3137 6 12V6.1401Z" stroke="#333333" strokeWidth="2"/>
	<path d="M10 6V2" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M14 6V2" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M11 13.5H13" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M12 18V20.5C12 21.3285 12.6715 22 13.5 22H19" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'bolt-one',
      props: {
        width: {
          type: String,
          default: '24px'
        },
        height: {
          type: String,
          default: '24px'
        }
      }
    };
    </script>
  