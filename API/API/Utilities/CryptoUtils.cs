using System.Security.Cryptography;

namespace API.Utilities
{
    public class CryptoUtils
    {
        private const int saltSize = 16;
        private const int hashSize = 32;
        private const int iterations = 100000;

        public string GenerateRandomPassword(int length = 16)
        {
            const string chars =
                "ABCDEFGHJKLMNPQRSTUVWXYZ" +
                "abcdefghijkmnopqrstuvwxyz" +
                "23456789!@#$%";

            var bytes = new byte[length];
            var result = new char[length];

            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(bytes);
            }

            for (int i = 0; i < length; i++)
                result[i] = chars[bytes[i] % chars.Length];

            return new string(result);
        }

        public string Hash(string password)
        {
            byte[] salt = RandomNumberGenerator.GetBytes(saltSize);
            byte[] hash = Rfc2898DeriveBytes.Pbkdf2(password, salt, iterations, HashAlgorithmName.SHA512, hashSize);

            return $"{Convert.ToHexString(hash)}-{Convert.ToHexString(salt)}";
        }

        public bool VerifyHash(string password, string passwordHash)
        {
            string[] parts = passwordHash.Split("-");
            byte[] hash = Convert.FromHexString(parts[0]);
            byte[] salt = Convert.FromHexString(parts[1]);

            byte[] inputHash = Rfc2898DeriveBytes.Pbkdf2(password, salt, iterations, HashAlgorithmName.SHA512, hashSize);

            return CryptographicOperations.FixedTimeEquals(hash, inputHash);
        }
    }
}
