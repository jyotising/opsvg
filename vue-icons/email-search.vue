
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M22 12V4.5H12H2V12V19.5H12" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M18 19.5C19.3807 19.5 20.5 18.3807 20.5 17C20.5 15.6193 19.3807 14.5 18 14.5C16.6193 14.5 15.5 15.6193 15.5 17C15.5 18.3807 16.6193 19.5 18 19.5Z" stroke="#333333" strokeWidth="2"/>
	<path d="M20 18.5L22 20" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M2 4.5L12 12L22 4.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'email-search',
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
  