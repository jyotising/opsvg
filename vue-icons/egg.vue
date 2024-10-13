
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M22 12C22 13.3162 21.7457 14.5731 21.2836 15.7241C20.8156 16.8897 19.2191 15.7597 17.6107 17.4848C16.0024 19.2098 17.2551 20.6181 16.0084 21.1642C14.7813 21.7017 13.4255 22 12 22C6.47715 22 2 17.5229 2 12C2 6.47715 6.47715 2 12 2C17.5229 2 22 6.47715 22 12Z" stroke="#333333" strokeWidth="2"/>
	<path d="M10 12.5C10 12.5 10.1055 13.1055 10.5 13.5C10.8945 13.8945 11.5 14 11.5 14" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'egg',
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
  