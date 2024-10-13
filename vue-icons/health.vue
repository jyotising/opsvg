
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M19.5 3H4.5C3.67158 3 3 3.67158 3 4.5V19.5C3 20.3285 3.67158 21 4.5 21H19.5C20.3285 21 21 20.3285 21 19.5V4.5C21 3.67158 20.3285 3 19.5 3Z" stroke="#333333" strokeWidth="2"/>
	<path d="M13.65 6C12.7387 6 12 6.71735 12 7.60225C12 9.20455 13.95 10.6612 15 11C16.05 10.6612 18 9.20455 18 7.60225C18 6.71735 17.2613 6 16.35 6C15.792 6 15.2986 6.269 15 6.6808C14.7014 6.269 14.208 6 13.65 6Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'health',
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
  