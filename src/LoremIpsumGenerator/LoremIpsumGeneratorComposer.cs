using Umbraco.Cms.Core.Composing;
using Umbraco.Cms.Core.DependencyInjection;

namespace Umbraco.Community.LoremIpsumGenerator
{
    internal class LoremIpsumGeneratorComposer : IComposer
    {
        public void Compose(IUmbracoBuilder builder)
        {
            builder.ManifestFilters().Append<LoremIpsumGeneratorManifestFilter>();
        }
    }
}
