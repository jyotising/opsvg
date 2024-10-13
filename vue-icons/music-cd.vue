
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M12 22C17.5229 22 22 17.5229 22 12C22 6.47715 17.5229 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5229 6.47715 22 12 22Z" stroke="#333333" strokeWidth="2"/>
	<path d="M13 7V14" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M7 14.3328C7 13.3206 7.96705 12.5 9.16 12.5H13V14.6672C13 15.6794 12.033 16.5 10.84 16.5H9.16C7.96705 16.5 7 15.6794 7 14.6672V14.3328Z" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M16 7.5L13 7" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'music-cd',
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
  