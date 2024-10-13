
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M19 21H5C3.345 21 2 19.66 2 18V14C2 12.345 3.34 11 5 11H19C20.655 11 22 12.34 22 14V18C22 19.66 20.66 21 19 21Z" stroke="#333333" strokeLinejoin="round" strokeMiterlimit="2" strokeWidth="2"/>
	<path d="M2 16H22" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="2" strokeWidth="2"/>
	<path d="M5 11L8.24 3.6C8.395 3.235 8.755 3 9.155 3H17.75C18.715 3 19.5 3.785 19.5 4.75C19.5 5.715 18.715 6.5 17.75 6.5H11V11H5Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="2" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'curling',
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
  