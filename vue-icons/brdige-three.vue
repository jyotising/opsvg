
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M4 6V19" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M20 6V19" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M4 19C4 19 8 13.5 12 13.5C16 13.5 20 19 20 19" stroke="#333333" strokeWidth="2"/>
	<path d="M2 13.5H22" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M2 9.5H22" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M12 7.5V13.5" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	<path d="M8 9.5V13.5" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	<path d="M16 9.5V13.5" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'brdige-three',
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
  