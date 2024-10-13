
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M15.5 15.5H8.5V22H15.5V15.5Z" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M14.5 8.5H9.5V15.5H14.5V8.5Z" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M13.5 2H10.5V8.5H13.5V2Z" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M2 22H22" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'tower',
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
  