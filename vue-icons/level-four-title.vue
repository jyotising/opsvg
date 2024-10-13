
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M3 4V20" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M12 4V20" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M3.5 12H11.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M19.9883 20V10L15.5 16.4984V17.51H21.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'level-four-title',
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
  