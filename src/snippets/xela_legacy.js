export default {
  name: "xelA Tags (legacy)",
  language: "txt",

  generateFrom(data) {
    const result = [];
    
    if(data.content) {
      result.push(`${JSON.stringify(data.content)}`)
    }

    if (data.embed) {
      if (data.embed.title) {
        result.push(`[EMBED_TITLE:${JSON.stringify(data.embed.title)}]`)
      }

      if (data.embed.description) {
        result.push(`EMBED_DESC:${JSON.stringify(data.embed.description)}]`)
      }

      if (data.embed.color) {
        result.push(`[EMBED_COLOUR:${JSON.stringify(data.embed.color)}]`)
      }

      if (data.embed.footer) {
        const text = data.embed.footer.text ? JSON.stringify(data.embed.footer.text) : null;
        const icon_url = data.embed.footer.icon_url ? JSON.stringify(data.embed.footer.icon_url) : null;
        
        if (text) {
          result.push(`[EMBED_FOOTER:${text}]`)
        }
      }

      if (data.embed.thumbnail) {
        const thumbnail = data.embed.thumbnail.url ? JSON.stringify(data.embed.thumbnail.url) : null;
        if (thumbnail) {
          result.push(`[EMBED_THUMB:${thumbnail}"]`)
        }
      }

      if (data.embed.image) {
        const image = data.embed.image.url ? JSON.stringify(data.embed.image.url) : null;
        if (image) {
          result.push(`[EMBED_IMAGE:${image}]`)
        }
      }

      if (data.embed.author) {
        const name = data.embed.author.name ? JSON.stringify(data.embed.author.name) : null;
        const url = data.embed.author.url ? JSON.stringify(data.embed.author.url) : null;
        const icon_url = data.embed.author.icon_url ? JSON.stringify(data.embed.author.icon_url) : null;
        
        if (name && icon_url) {
          result.push(`[EMBED_ICON:${name}:${icon_url}]`)
        }
      }
    }
    return result.join(' ');
  }
};
