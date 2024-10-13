
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M5 15.5C5 15.5 5.0357 18.5 12 18.5C18.9643 18.5 19 15.5 19 15.5V7.5H12H5V15.5Z" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M12 2V5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M8 2.5V4.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M16 2.5V4.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M7 18V20.5C7 21.0523 7.4477 21.5 8 21.5H16C16.5523 21.5 17 21.0523 17 20.5V18" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'thermos-cup',
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
  