
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M6 5C6 4.44771 6.4477 4 7 4H17C17.5523 4 18 4.44771 18 5V10H6V5Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M22 17.5C21.4459 18.1666 20.8125 20 18.2 20C16.8314 20 14.972 19.1581 12.5 18.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M2 17.5C2 17.5 5 13 6 10H18C19 13 22 17.5 22 17.5C19 15.5 9.5 20 6 20C3.25 20 2.58333 18.1666 2 17.5Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'sun-hat',
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
  