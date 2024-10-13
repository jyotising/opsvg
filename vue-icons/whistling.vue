
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M13.5 5.5H2V9.5H7.5C7.175 10.275 7 11.105 7 12C7 15.605 9.895 18.5 13.5 18.5C17.1 18.5 20 15.605 20 12C20 8.395 17.105 5.5 13.5 5.5Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="2" strokeWidth="2"/>
	<path d="M13.5 5.5V8.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="2" strokeWidth="2"/>
	<path d="M20 12H22" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="2" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'whistling',
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
  