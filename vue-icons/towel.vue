
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M18 9H2V13H18V9Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="2" strokeWidth="2"/>
	<path d="M18 6V16.5C18 17.3285 17.3285 18 16.5 18H3.5C2.67158 18 2 17.3285 2 16.5V3.5C2 2.67158 2.67158 2 3.5 2H20.5C21.3285 2 22 2.67158 22 3.5V20.5C22 21.3285 21.3285 22 20.5 22H7.5C6.67155 22 6 21.3285 6 20.5V18.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="2" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'towel',
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
  