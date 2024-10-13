
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M9.5 6.5C9.5 5.1193 10.6193 4 12 4C13.3807 4 14.5 5.1193 14.5 6.5C14.5 7.8807 13.3807 9 12 9V11" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M22 18H2C2 15.5 5 11 12 11C19 11 22 15.5 22 18Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'coat-hanger',
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
  