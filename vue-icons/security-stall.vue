
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M16 14.5H8V22H16V14.5Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M18 2H6V5H18V2Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M8 5V14.5" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	<path d="M16 5V14.5" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	<path d="M2 22H22" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'security-stall',
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
  