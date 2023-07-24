export default {
  name: "xelA Tags",
  language: "txt",

  generateFrom(data) {
    const result = [];
    
    if(data.content) {
      result.push(`${JSON.stringify(data.content)}`)
    }

    if (data.embed) {
      if (data.embed.title) {
        result.push(`{{ embed.title("${JSON.stringify(data.embed.title)}") }}`)
      }

      if (data.embed.description) {
        result.push(`{{ embed.desc("${JSON.stringify(data.embed.description)}") }}`)
      }

      if (data.embed.color) {
        result.push(`{{ embed.colour("${JSON.stringify(data.embed.color)}") }}`)
      }

      if (data.embed.footer) {
        const text = data.embed.footer.text ? JSON.stringify(data.embed.footer.text) : null;
        const icon_url = data.embed.footer.icon_url ? JSON.stringify(data.embed.footer.icon_url) : null;
        
        if (icon_url) {
          if (text) {
            result.push(`{{ embed.footer("${text}", "${icon_url}") }}`)
          }
        } else if (text) {
          result.push(`{{ embed.footer("${text}") }}`)
        }
      }

      if (data.embed.thumbnail) {
        const thumbnail = data.embed.thumbnail.url ? JSON.stringify(data.embed.thumbnail.url) : null;
        if (thumbnail) {
          result.push(`{{ embed.thumb("${thumbnail}") }}`)
        }
      }

      if (data.embed.image) {
        const image = data.embed.image.url ? JSON.stringify(data.embed.image.url) : null;
        if (image) {
          result.push(`{{ embed.image("${image}") }}`)
        }
      }

      if (data.embed.author) {
        const name = data.embed.author.name ? JSON.stringify(data.embed.author.name) : null;
        const url = data.embed.author.url ? JSON.stringify(data.embed.author.url) : null;
        const icon_url = data.embed.author.icon_url ? JSON.stringify(data.embed.author.icon_url) : null;
        
        if (name && icon_url) {
          result.push(`{{ embed.icon("${name}", "${icon_url}") }}`)
        }
      }

      if (data.embed.fields) {
        for (const field of data.embed.fields) {
          const name = field.name ? JSON.stringify(field.name) : null;
          const value = field.value ? JSON.stringify(field.value) : null;
          const inline = field.inline !== undefined ? field.inline.toString() : `false`;
          
          if (name && value) {
            result.push(`{{ embed.field("${name}", "${value}", ${inline}) }}`)
          }
        }
      }
    }
    return result.join(' ');
  }
};
