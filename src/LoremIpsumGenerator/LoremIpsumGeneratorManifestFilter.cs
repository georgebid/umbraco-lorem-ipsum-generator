using Umbraco.Cms.Core.Manifest;

namespace Umbraco.Community.LoremIpsumGenerator
{
    internal class LoremIpsumGeneratorManifestFilter : IManifestFilter
    {
        public void Filter(List<PackageManifest> manifests)
        {
            var assembly = typeof(LoremIpsumGeneratorManifestFilter).Assembly;

            manifests.Add(new PackageManifest
            {
                PackageName = "Lorem Ipsum Generator ",
                Version = assembly.GetName()?.Version?.ToString(3) ?? "0.1.0",
                AllowPackageTelemetry = true
            });
        }
    }
}
