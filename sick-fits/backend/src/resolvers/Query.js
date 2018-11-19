const Query = {
  dogs(parent, args, ctx, info) {
    return [{name: 'Basil'}, {name: 'Georgia'}]
  }

};

module.exports = Query;
