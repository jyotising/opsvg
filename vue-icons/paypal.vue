
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M16.5156 14C19.5 14 21.5 12.75 21.5 10C21.5 7.25 19.5 6 16.5156 6H11L8.5 21.5H13L14 14H16.5156Z" fillRule="evenodd" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M9 18H5L7.5 2.5H13.0156C16 2.5 18 3.75 18 6.5C18 9.25 16 10.5 13.0156 10.5H10.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'paypal',
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
  