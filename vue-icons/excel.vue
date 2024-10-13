
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M4 7.5V3C4 2.44771 4.44771 2 5 2H19C19.5523 2 20 2.44771 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44771 22 4 21.5523 4 21V16.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M15.5 7.5H17" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	<path d="M14 11.5H17" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	<path d="M14 15.5H17" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	<path d="M11 7.5H2V16.5H11V7.5Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M5 10.5L8 13.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M8 10.5L5 13.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'excel',
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
  