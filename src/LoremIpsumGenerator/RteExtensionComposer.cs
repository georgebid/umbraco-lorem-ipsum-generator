using Microsoft.Extensions.DependencyInjection;
using Umbraco.Cms.Core.Composing;
using Umbraco.Cms.Core.Configuration.Models;
using Umbraco.Cms.Core.DependencyInjection;
using static Umbraco.Cms.Core.Configuration.Models.RichTextEditorSettings;

namespace Umbraco.Community.LoremIpsumGenerator;

public class RteExtensionComposer : IComposer
{
    public void Compose(IUmbracoBuilder builder)
    {
        builder.Services.PostConfigure<RichTextEditorSettings>(settings =>
        {
            settings.CustomConfig.Add(
                "external_plugins", "{\"lorem-ipsum\":\"/App_Plugins/LoremIpsumGenerator/loremipsumplugin.umd.js\"}"
                );
            var commands = settings.Commands.ToList();
            commands.Add(new RichTextEditorCommand
            {
                Alias = "loremIpsum",
                Name = "Lorem Ipsum",
                Mode = Cms.Core.Models.ContentEditing.RichTextEditorCommandMode.Insert
            });
            settings.Commands = commands.ToArray();
        });
    }
}
