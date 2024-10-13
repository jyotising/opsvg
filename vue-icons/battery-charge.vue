
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M6.5 7H3C2.44771 7 2 7.4477 2 8V16C2 16.5523 2.44771 17 3 17H6.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M15.5 17H19C19.5523 17 20 16.5523 20 16V8C20 7.4477 19.5523 7 19 7H15.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M11.001 7L8.5 12.0006H13.502L11 17" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M21 10H22C22.5523 10 23 10.4477 23 11V13C23 13.5523 22.5523 14 22 14H21V10Z" fill="#333333"/>
</svg>
    </template>
    <script>
    export default {
      name: 'battery-charge',
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
  