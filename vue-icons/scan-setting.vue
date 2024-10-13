
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M20 2.5H4C3.17157 2.5 2.5 3.17157 2.5 4V20C2.5 20.8284 3.17157 21.5 4 21.5H20C20.8284 21.5 21.5 20.8284 21.5 20V4C21.5 3.17157 20.8284 2.5 20 2.5Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M17 10.5L18.5 12L17 13.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M7 10.5L5.5 12L7 13.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M13.5 7L12 5.5L10.5 7" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M13.5 17L12 18.5L10.5 17" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'scan-setting',
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
  