
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M21 2.5H3V21.5H21V2.5Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M18 6H6V9H18V6Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M8 9V21.5" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	<path d="M16 9V21.5" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	<path d="M8 12H16" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	<path d="M8 15H16" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	<path d="M8 18H16" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'garage',
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
  