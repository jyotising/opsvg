
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M4.50012 8L17.0001 3L19.0003 8" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M2 8H22V11C20.5 11 19 12 19 13.75C19 15.5 20.5 17 22 17V20H2V17C3.50008 17 5 16 5 14C5 12 3.5 11 2 11V8Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M8.5 12.6924H11.5" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	<path d="M8.5 15.6924H15.5" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'ticket',
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
  