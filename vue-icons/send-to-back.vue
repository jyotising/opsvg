
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M7 10.5H2.5V2.5H10.5V7" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M16 13.5H21.5V21.5H13.5V16" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M7 16V7H16V16H7Z" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'send-to-back',
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
  