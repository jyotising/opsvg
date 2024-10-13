
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M12 2V11.5L4 18" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	<path d="M12 11.5L20 18" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	<path d="M15.5 10L20 7" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	<path d="M8.5 10L4 7" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	<path d="M12 15.5V21.5" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'bytedance-mini-app',
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
  