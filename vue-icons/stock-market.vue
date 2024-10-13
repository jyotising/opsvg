
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M7 10H3V17H7V10Z" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M14 7H10V20H14V7Z" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M12 22V20" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M21 6H17V10.5H21V6Z" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M5 10V5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M19 17V10.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M19 6V2" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'stock-market',
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
  