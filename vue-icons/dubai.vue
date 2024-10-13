
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M7 2V22" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	<path d="M7.25 3C7.25 3 14 6.5 16 11C18 15.5 16.5 22 16.5 22" stroke="#333333" strokeWidth="2"/>
	<path d="M2 22H22" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M5 7.5H16" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	<path d="M7 11H11" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	<path d="M7 14.5H13" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	<path d="M7 18H13.5" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'dubai',
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
  