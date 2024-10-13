
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M3.0061 17.0025V4.01807C3.0061 3.46578 3.45382 3.01807 4.0061 3.01807H19.9999C20.5522 3.01807 20.9999 3.46578 20.9999 4.01807V17.0025C20.9999 17.8309 20.3283 18.5025 19.4999 18.5025H18.5023V19C18.5023 20.1045 17.6069 21 16.5023 21H16.5021C15.3976 21 14.5021 20.1045 14.5021 19V18.5025H9.50388V19.0008C9.50388 20.1049 8.60878 21 7.50468 21C6.40058 21 5.50553 20.1049 5.50553 19.0008V18.5025H4.5061C3.67768 18.5025 3.0061 17.8309 3.0061 17.0025Z" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M21 11.5H3" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M17 6.5H7V11.5H17V6.5Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M7 15H8" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M16 15H17" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'bus',
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
  