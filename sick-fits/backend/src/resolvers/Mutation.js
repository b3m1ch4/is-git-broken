const Mutations = {
  async createItem(parent, args, ctx, info) {
  // TODO check if they are logged in

  const item = await ctx.db.mutation.createItem(
    {
      data: {
        ...args
      },
    }, info);

    console.log(item);

    return item;

  },
  updateItem(parent, args, ctx, info) {
    // first take copy of the arguments
    const updates = {...args};
    delete updates.id;
    return ctx.db.mutation.updateItem({
      data: updates,
      where: {
        id: args.id
      }
    },
    info
    );
  }
}

module.exports = Mutations;
