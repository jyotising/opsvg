
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M12 5.5V18.5" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	<path d="M16.5 2V22" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	<path d="M3 5.5V18.5" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	<path d="M21 7.5V16.5" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	<path d="M7.5 9V15" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'waves-right',
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
  